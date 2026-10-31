# 延拓性质 + Zorn 引理 $\implies$ Baer 判据
`imp.baer-criterion` · 推出 · strong 边 · 根 `../`

`def.injective-module` 内射模 + `prop.injective-splitting` 内射的单射可裂 → `thm.baer-criterion` 内射的理想判据

定义 $f_{2}(a + r b) := f_{1}(a) + r x$。**良定义**：若 $a + r b = a_{1} + r_{1} b$，则 $(r - r_{1}) b = a_{1} - a \in A_{1}$，故 $r - r_{1} \in J$，于是 $f_{1}((r-r_{1})b) = f_{1}(a_{1}-a)$，两边即 $f_{1}(a) + rx = f_{1}(a_{1}) + r_{1}x$ ✓。这与极大性矛盾，故 $A_{1} = B$ ✓。∎

> 整条证明只用了「$R$ 是环」与 Zorn 引理，没有任何小性/有限性假设 —— 所以它对**任意**环都成立，这是它比平坦的 Lambek 判据更「硬」的原因。
