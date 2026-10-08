# 范畴　`def.category`　·　说明
根 `../`

要害是 $M \times_{s,t} M$ 这个**纤维积**：复合不是 $M \times M$ 上的运算，只在一部分态射对上定义。所以范畴里的复合是**部分运算**，「$f \circ g$ 有没有定义」本身就是要检查的事。

例：$\mathbf{Set}$（集合与函数）、$\mathbf{Mon}$（幺半群）、$\mathbf{Grp}$（群）、$\mathbf{Ab}$（交换群）、$\mathbf{Rng}$（环）、$G\text{-}\mathbf{Set}$（$G$-集）。

**单形范畴**：$\mathcal{O} = \mathbb{N}$，



$$M = \{ (m, n, f) : m, n \in \mathbb{N},\ f : [m] \to [n] \text{ 递增} \}, \qquad [m] = \{ 1, \ldots, m \}$$



态射是从 $m$ 到 $n$ 的递增映射。

**开集范畴** $\operatorname{Open}(X)$：给定拓扑空间 $(X, \tau)$，取 $\mathcal{O} = \tau$，



$$M = \{ (u, v) : u \subseteq v \} \subseteq \tau \times \tau$$



即「从小的开集到包含它的开集」。
