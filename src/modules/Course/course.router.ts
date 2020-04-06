import Router, { IRouterContext } from 'koa-router';
import { ObjectId } from 'mongodb';

import { neo4jDriver } from '../../lib';

import { Course } from './course.model';

export const courseRouter = new Router({
  prefix: '/course'
})

courseRouter
  .get('/', async (ctx: any) => {
    const { session } = ctx;

    console.log(session);

    const { records } = await neo4jDriver
      .session()
      .run(`
        MATCH (c: Course)<-[:LISTEN]-(:Student { id: "${session.id}" })
        RETURN c.id
      `);

    const courseIds = records.map(record => new ObjectId(record.get('c.id')));
    const courses = await Course.find({ _id:  courseIds});

    ctx.body = courses;
  })
  .post('/', async (ctx: IRouterContext) => {
    await Course.create(ctx.request.body);
  });
