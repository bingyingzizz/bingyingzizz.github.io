# Kan 延拓 $\implies$ 余极限与右伴随都是它的特例
`imp.kan-unifies` · 推出 · strong 边 · 根 `../`

`def.kan-extension` Kan 延拓 + `def.limit` 极限 + `def.adjoint` 伴随函子 → `ex.kan-extension` Kan 延拓的两个例子

右边只有「$1_{\mathcal{C}}$ 到 $G \circ F$ 的全部自然变换」一个元素（取 $1_{\mathcal{C}}$ 的像即得），所以左侧 $F_{!}1_{\mathcal{C}}$ 到每个 $G$ 的态射也恰好只有一个 —— 这正是「$F_{!}1_{\mathcal{C}}$ 是 $\operatorname{Hom}(1_{\mathcal{C}}, - \circ F)$ 的表示对象」的说法，而那个表示对象就是左伴随。记 $G = F_{!}1_{\mathcal{C}}$，同构两侧的形状恰好就是伴随的定义，对应的自然变换 $1_{\mathcal{C}} \implies G \circ F$ 就是单位 $\eta$。∎

> 看完这两条，前面那些定义就串成一条线了：**极限与余极限是「沿到终范畴的函子」延拓，伴随是「沿函数子本身」延拓**。
