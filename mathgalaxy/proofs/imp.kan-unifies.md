# Kan 延拓 $\implies$ 余极限与右伴随都是它的特例
`imp.kan-unifies` · 推出 · strong 边 · 根 `../`

`def.kan-extension` Kan 延拓 + `def.limit` 极限 + `def.adjoint` 伴随函子 → `ex.kan-extension` Kan 延拓的两个例子

**(1)** 取 $p : I \to \mathbf{1}$ 为到终范畴的唯一函子。则预复合 $p^{*} : \mathcal{C}^{\mathbf{1}} \to \mathcal{C}^{I}$ 就是常图函子 $\Delta$。于是

$$\operatorname{Hom}(p_{!}D,\ G) \;\cong\; \operatorname{Hom}(D,\ G \circ p) \;=\; \operatorname{Hom}_{\mathcal{C}^{I}}\bigl(D,\ \Delta G(\ast)\bigr)$$

右边正是「$D$ 到常图 $G(\ast)$ 的余锥」的集合。由余极限的泛性质（锥函子被 $\operatorname{colim} D$ 表示），能表示这个函子的只有一个对象：

$$(p_{!}D)(\ast) \;=\; \varinjlim_{i \in I} D(i)$$

所以 $p_{!}D$ 存在 $\iff D$ 有余极限。∎

> 续见 proofs/imp.kan-unifies.2.md
