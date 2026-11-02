# 拟紧拟分离层 $\iff$ 小对象
`imp.qcqs` · 推出 · strong 边 · 根 `../`

`def.quasi-compact` 拟紧对象 + `def.quasi-separated` 拟分离对象 + `def.precanonical-topology` 预标准拓扑 → `thm.pretopos-qcqs` 预拓扑斯由拓扑斯唯一确定

**（拟紧且拟分离 $\implies$ 小对象）** 设 $F$ 拟紧，则由性质 3 存在满射 $X \to F$（$X \in \mathcal{C}$）。要把它压成一个同构。

取核对 $R := X \times_{F} X$。因为 $F$ 拟分离、而 $X$ 拟紧，两个投影 $X \to F$ 使 $R$ 是「两个拟紧对象沿拟分离对象的纤维积」，所以 $R$ 也拟紧；再由性质 3 得到 $R$ 被某个 $R_{0} \in \mathcal{C}$ 满射覆盖。

> 续见 proofs/imp.qcqs.4.md
