# Grothendieck 谱序列　`cor.grothendieck-spectral`　·　说明
根 `../`

- 再对 $A^{\bullet}$ 取 **Cartan–Eilenberg 分解** $J^{\bullet,\bullet}$（每个 $J^{p,\bullet}$ 是 $A^{p}$ 的 $G$-零调消解，横竖两方向的同调都算得出来）；
- 双复形的两个谱序列：按 $p$ 先过滤收敛到 $H^{p+q}(G J^{\bullet,\bullet}) = R^{p+q}(G\circ F)M$，而它的 $E_{2}$ 页是「先竖后横」算出来的 $R^{p}G\bigl(H^{q}(A^{\bullet})\bigr) = R^{p}G\bigl(R^{q}FM\bigr)$；

另一个谱序列（先横后竖）因为每列都是零调消解而在 $E_{2}$ 页退化，两边收敛到同一个东西。

∎
细节在前两条里：Cartan–Eilenberg 分解的存在性，双复形谱序列的收敛与 $E_{2}$ 页的识别。

**典型应用**：层上同调 — 先层化再取截面、Čech 上同调到 de Rham 上同调、群的同调里的 Lyndon–Hochschild–Serre 谱序列，都是它的特例。

**为什么要求 $F$ 把内射送到 $G$-零调**：这样 $F$ 的内射消解才能直接拿来做 $G$ 的零调消解，两边才接得上。
