import { Router } from 'express';

export default interface SetRoute {
    setRoute(): Router;
}