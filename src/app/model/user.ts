export type PositionEnum =
    'OMBUDSMAN' /** ผสส **/
    | 'SECRETARY' /** เลขาธการ **/
    | 'DEPUTY_SECRETARY'  /** รองเลขาธการ **/
    | 'DEPARTMENT_HEAD' /** ผอ **/
    | 'DIVISION_HEAD' /** หัวหน้า **/
    | 'STAFF' /** ผอ **/
export type DepartmentEnum =
    | 'INTAKE'   /** สสร **/
    | 'INVESTIGATION'  /** สส  **/
    | 'INVESTIGATION_1'  /** สส 1 **/
    | 'INVESTIGATION_2'  /** สส 2 **/
    | 'INVESTIGATION_3'  /** สส 3 **/
    | 'INVESTIGATION_4'  /** สส 4 **/
    | 'LEGAL'   /** กฏหมาย **/


export class User {
    username: string;
    name: string;
    authorities: (DepartmentEnum | PositionEnum)[]=[];
}
