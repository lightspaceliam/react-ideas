import IBaseModel from "./IBaseModel";
import ISelect from "./ISelect";

export default interface ISimpleForm extends IBaseModel {
    firstName: string;
    lastName: string;
    email: string;
    preferredContact: ISelect;
}