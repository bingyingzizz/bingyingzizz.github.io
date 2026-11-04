# imp.t2-t1
`imp.t2-t1` · 推出 · strong 边 · 根 `../`

`def.hausdorff` Hausdorff 空间 → `def.t1-space` T1 空间

要证每个单点集闭，即证其补 $X \setminus \{y\}$ 开。对每个 $x \ne y$，由 $T_{2}$ 有不交开集 $U_{x} \ni x$、$V_{x} \ni y$；由不交性 $U_{x} \subseteq X \setminus \{y\}$。于是

$$X \setminus \{y\} = \bigcup_{x \ne y} U_{x}$$

是一族开集之并 = 开集 ✓。所以每个单点集闭，即 $T_{1}$。∎

⚠️ **反向不成立**：余有限拓扑 $T_{1}$ 但不 $T_{2}$（任意两个非空开集必相交）。

> 「强 $\implies$ 弱」的推出：用更强的分离公理去证更弱的，若参与分层会与定义边形成层号倒置（正则 L18 vs T3.5 L6）。按**推论边**处理：真推得通，但不是建造顺序。
