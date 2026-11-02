# 余单位与忠实性　`prop.counit-epi-iff-faithful`　·　说明
根 `../`

**证明。** 设 $F \dashv G$，伴随同构 $\varphi_{Y,Z} : \operatorname{Hom}_{\mathcal{D}}(FY, Z) \xrightarrow{\ \cong\ } \operatorname{Hom}_{\mathcal{C}}(Y, GZ)$，余单位 $\varepsilon_{Y} = \varphi^{-1}(1_{GY})$。
- **关键同构**：由三角恒等式，下面的方块交换（对一切 $Z$）：
$$\begin{array}{ccc} \operatorname{Hom}_{\mathcal{D}}(Y, Z) & \xrightarrow{\ G_{Y,Z}\ } & \operatorname{Hom}_{\mathcal{C}}(GY, GZ)\\ {\scriptstyle \operatorname{Hom}(\varepsilon_{Y}, Z)}\big\downarrow & & \big\downarrow{\scriptstyle \cong\ \varphi_{GY,Z}} \\ \operatorname{Hom}_{\mathcal{D}}(FGY, Z) & \xrightarrow[\ \cong\ ]{} & \operatorname{Hom}_{\mathcal{C}}(GY, GZ)\end{array}$$
即 $\varphi_{GY,Z}\circ\operatorname{Hom}(\varepsilon_{Y}, Z) = G_{Y,Z}$ ✓。
- 于是（用「$e$ 是满态射 $\iff$ $\operatorname{Hom}(e, Z)$ 对一切 $Z$ 是单射」这条刻画）
$$\varepsilon_{Y}\text{ 满} \iff 

> 续见 notes/prop.counit-epi-iff-faithful.2.md
