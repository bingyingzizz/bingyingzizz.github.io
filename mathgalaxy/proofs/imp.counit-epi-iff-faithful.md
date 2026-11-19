# imp.counit-epi-iff-faithful
`imp.counit-epi-iff-faithful` · 推出 · strong 边 · 根 `../`

`def.adjunction-unit` 单位与余单位 + `def.adjoint` 伴随函子 → `prop.counit-epi-iff-faithful` 余单位与忠实性

**证明。** 设 $F \dashv G$，伴随同构 $\varphi_{Y,Z} : \operatorname{Hom}_{\mathcal{D}}(FY, Z) \xrightarrow{\ \cong\ } \operatorname{Hom}_{\mathcal{C}}(Y, GZ)$，余单位 $\varepsilon_{Y} = \varphi^{-1}(1_{GY})$。
- **关键同构**：由三角恒等式，下面的方块交换（对一切 $Z$）：
$$\begin{array}{ccc} \operatorname{Hom}_{\mathcal{D}}(Y, Z) & \xrightarrow{\ G_{Y,Z}\ } & \operatorname{Hom}_{\mathcal{C}}(GY, GZ)\\ {\scriptstyle \operatorname{Hom}(\varepsilon_{Y}, Z)}\big\downarrow & & \big\downarrow{\scriptstyle \cong\ \varphi_{GY,Z}} \\ \operatorname{Hom}_{\mathcal{D}}(FGY, Z) & \xrightarrow[\ \cong\ ]{} & \operatorname{Hom}_{\mathcal{C}}(

> 续见 proofs/imp.counit-epi-iff-faithful.2.md
