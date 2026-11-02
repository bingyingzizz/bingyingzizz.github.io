# Kan 延拓 $\implies$ 余极限与右伴随都是它的特例
`imp.kan-unifies` · 推出 · strong 边 · 根 `../`

`def.kan-extension` Kan 延拓 + `def.limit` 极限 + `def.adjoint` 伴随函子 → `ex.kan-extension` Kan 延拓的两个例子

**(2)** 取 $p = F : \mathcal{C} \to \mathcal{D}$、$F$ 位置的函子取恒等函子 $1_{\mathcal{C}}$。左 Kan 延拓的泛性质给出

$$\operatorname{Hom}(F_{!}1_{\mathcal{C}},\ G) \;\cong\; \operatorname{Hom}(1_{\mathcal{C}},\ G \circ F)$$

右边只有「$1_{\mathcal{C}}$ 到 $G \circ F$ 的全部自然变换」一个元素（取 $1_{\mathcal{C}}$ 的像即得），所以左侧 $F_{!}1_{\mathcal{C}}$ 到每个 $G$ 的态射也恰好只有一个 —— 这正是「$F_{!}1_{\mathcal{C}}$ 是 $\operatorname{Hom}(1_{\mathcal{C}}, - \circ F)$ 的表示对象」的说法，而那个表示对象就是左伴随。

> 续见 proofs/imp.kan-unifies.3.md
