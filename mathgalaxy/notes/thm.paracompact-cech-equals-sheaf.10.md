# 仿紧空间上的 Čech 就是上同调　`thm.paracompact-cech-equals-sheaf`　·　说明
根 `../`

**⑤ 好覆盖的情形可以收尾（用 `thm.cartan-leray`）。** 若覆盖 $\mathfrak{U}$ 的每个有限交 $U_{i_{0}\cdots i_{p}}$ 都满足 $H^{q}(U_{i_{0}\cdots i_{p}},\mathcal{M})=0$（$q>0$），则 Čech 复形 $C^{\bullet}(\mathfrak{U},H^{q}(\mathcal{M}))$ 的每一项都是这些 $H^{q}(U_{I},\mathcal{M})=0$ 的积（Čech 项按有限交取值，正是预层 $U\mapsto H^{q}(U,\mathcal{M})$ 的截面；这里只需预层在覆盖的交上消失，不必断言层 $H^{q}(\mathcal{M})$ 本身是零层），故 Cartan–Leray 谱序列的 $E_{2}^{p,q}=\check{H}^{p}(\mathfrak{U},H^{q}(\mathcal{M}))$ 在 $q>0$ 时为 $0$，谱序列退化，给出 $\check{H}^{n}(\mathfrak{U},\mathcal{M})\cong H^{n}(X,\mathcal{M})$。所以陈述中「好覆盖上逐覆盖同构」这一半已成立；一般局部有限覆盖的定向极限仍需 ② 与 ④。

> 续见 notes/thm.paracompact-cech-equals-sheaf.11.md
