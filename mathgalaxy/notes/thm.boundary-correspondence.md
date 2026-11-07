# 边界对应定理　`thm.boundary-correspondence`　·　说明
根 `../`

**这条命题就是 Carathéodory–Osgood 边界对应定理**（Jordan 区域版）：Riemann 映射的内部双全纯（`thm.riemann-mapping`，已补完整证明）自动延拓到闭包并给出同胚。它不是 Riemann 映射定理的推论——内部双全纯完全不管边界行为，Jordan 条件是本质的。

**能独立验证的一半：延拓加边界单射，则同胚。** 设 $f:\Omega\to\mathbb{D}$ 已连续延拓到 $\overline{\Omega}$，且在 $\partial\Omega$ 上单射。则：

① $f(\partial\Omega)\cap\mathbb{D}=\emptyset$。否则有 $\zeta\in\partial\Omega$ 使 $w=f(\zeta)\in\mathbb{D}=f(\Omega)$；取逆映射 $g=f^{-1}:\mathbb{D}\to\Omega$（$f$ 内部双全纯，故 $g$ 全纯）。让 $z\to\zeta$（$z\in\Omega$）时 $f(z)\to f(\zeta)=w$，由 $g$ 在 $w$ 连续得 $g(w)=\zeta$；但 $g(w)\in\Omega$，而 $\zeta\in\partial\Omega$，矛盾。注意这一步**不需要**边界单射，只需要延拓存在。

> 续见 notes/thm.boundary-correspondence.2.md
