# Use Case Diagram

```mermaid
usecaseDiagram
  actor "Counter Staff/Operator" as Operator
  actor "Supervisor/Admin" as Admin
  actor "System (Model)" as System

  Operator --> (Submit Address)
  Operator --> (View Prediction)
  Operator --> (Review/Override Prediction)
  Operator --> (Track Parcel)
  Operator --> (View Post Offices)

  Admin --> (View Mapping History)
  Admin --> (Add Simulated Merge)
  Admin --> (View Analytics)
  Admin --> (View Activity Log)

  (Submit Address) ..> (View Prediction) : <<include>>
  (Review/Override Prediction) ..> (Track Parcel) : <<extend>>
  
  System --> (View Prediction)
  System --> (View Analytics)
```
