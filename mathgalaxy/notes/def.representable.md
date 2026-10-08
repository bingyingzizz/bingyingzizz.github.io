# 表示函子　`def.representable`　·　说明
根 `../`

一句话：**$F$ 的全部数据都由 $X$ 上的一个元素 $s$ 生成**。给定任何别的 $t$，都有唯一的 $f$ 把 $s$ 推过去变成它 —— 所以别处的元素不是随便来的，是被 $s$ 推出来的。

等价的说法：$(X, s)$ 万有 $\iff$ $(X, s)$ 是元素范畴 $\operatorname{el}(F)$ 的始对象 —— 「泛」这个字在这一层和上一层的用法是同一个。

例：



- $k \in \operatorname{Ob}(\mathbf{CRng})$，$F : k\text{-}\mathbf{Alg} \to \mathbf{Set}$ 是遗忘函子。$(k[t],\ t)$ 表示 $F$：对 $A \in k\text{-}\mathbf{Alg}$ 与 $a \in F(A)$，令 $t \mapsto a$ 诱导出唯一的 $k$-代数同态 $k[t] \to A$。
- $F : \mathbf{Ring} \to \mathbf{Set}$ 取常值单点集。$\mathbb{Z}$ 表示 $F$：每个环都有唯一的 $\mathbb{Z} \to R$。
- 固定拓扑空间 $X$ 与子空间 $Y \subseteq X$，反变函子



  $$F : \mathbf{Top}^{\mathrm{op}} \to \mathbf{Set}, \qquad Z \mapsto \{\, f : Z \to X \ \mid\ f \text{ 连续且 } f(Z) \subseteq Y \,\}$$



  被 $F(Y)$ 里那个自然元素 $i : Y \rightarrowtail X$ 表示。
