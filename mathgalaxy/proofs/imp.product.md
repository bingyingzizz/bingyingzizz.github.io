# 幂集 + 配对 + 并集 + 分离公理模式 $\implies A \times B$ 存在
`imp.product` · 推出 · strong 边 · 根 `../`

`ax.power` 幂集公理 + `ax.pair` 配对公理 + `ax.union` 并集公理 + `ax.sep` 分离公理模式 → `thm.product` 笛卡尔积存在

任给 $A$、$B$。

1. 由配对公理与并集公理，$A \cup B$ 是集合。

2. 对任意 $a \in A$、$b \in B$，Kuratowski 有序对 $(a, b) = \{\{a\}, \{a, b\}\}$。其中 $\{a\} \subseteq A \cup B$，$\{a, b\} \subseteq A \cup B$，所以 $\{a\}, \{a, b\} \in \mathcal{P}(A \cup B)$，进而 $(a, b) \in \mathcal{P}(\mathcal{P}(A \cup B))$。

3. 由幂集公理，$\mathcal{P}(\mathcal{P}(A \cup B))$ 是集合。用分离公理模式取

$$C = \{ z \in \mathcal{P}(\mathcal{P}(A \cup B)) : \exists a \in A, \exists b \in B, z = (a, b) \}$$

> 续见 proofs/imp.product.2.md
