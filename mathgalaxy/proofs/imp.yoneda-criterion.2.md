# 米田引理 $\implies$ 表示的两个定义等价
`imp.yoneda-criterion` · 推出 · strong 边 · 根 `../`

`lem.yoneda` 米田引理 → `thm.represented-criterion` 表示的两个定义等价

$$\alpha_{Y} : \operatorname{Hom}_{\mathcal{C}}(X, Y) \to F(Y), \qquad f \mapsto F(f)(s)$$

万有性说的正是「对每个 $t \in F(Y)$ 存在唯一 $f$ 使 $F(f)(s) = t$」，所以每个 $\alpha_{Y}$ 都是双射。剩下要检查的只有自然性：对 $g : Y \to Z$，两个复合 $\alpha_{Z} \circ \operatorname{Hom}(X, g)$ 与 $F(g) \circ \alpha_{Y}$ 都把那片 $f : X \to Y$ 送到 $F(g \circ f)(s)$，所以相等。于是 $\alpha : h^{X} \implies F$ 是自然同构，$h^{X} \cong F$。∎

> 这条的意义在于：**要证明一个函子可表示，只要找到那个万有元素**，同构自动就有了。
