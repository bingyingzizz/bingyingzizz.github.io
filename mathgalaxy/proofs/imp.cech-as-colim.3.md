# imp.cech-as-colim
`imp.cech-as-colim` · 推出 · strong 边 · 根 `../`

`def.grothendieck-topology` Grothendieck 拓扑 + `def.cech-cohomology` Čech 上同调 + `def.ab-axioms` Grothendieck 的 AB 公理 → `prop.cech-as-colim` Čech 上同调是沿覆盖筛的余极限

而 $\varinjlim$ 在 $\mathrm{Ab}$ 里**正合**（AB5），所以
$$\varinjlim_{R \in J(X)} H^{n}(R, M) = H^{n}\Bigl(\varinjlim_{R \in J(X)} \check{C}^{\bullet}(R, M)\Bigr),$$
而右边括号里那个余极限复形与按覆盖定义的 $\check{C}^{\bullet}(X, M)$ 逐项一致（(a) 说的就是「每个覆盖都已经被某个筛表示」）。两边一比即得。∎

> 补 AB 公理节点（层 20，等于目标 20）；滤过余极限正合来自 AB5，不参与分层。
