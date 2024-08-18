import { Router } from "express";
import { get_all_cards,create_card ,card_detail} from "../controllers/help_card.controller.js";

const router = Router()


router.route("/cards").post(create_card)
router.route("/cards").get(get_all_cards)
router.route("/cards:title").get(card_detail)


export default router;