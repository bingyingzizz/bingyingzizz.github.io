# 内部　`def.interior`　·　说明
根 `../`

⭐ **对偶公式是唯一的记忆法**：$\mathring{A} = X \setminus \overline{X \setminus A}$。所以关于闭包的一切定理（对任意交闭、对有限并闭）都能一字不改地翻译成内部的定理（对任意并开、对有限交开）。

⚠️ **内部不保并**：$\mathring{(A \cup B)} \supseteq \mathring{A} \cup \mathring{B}$ 可能**严格**变大。例：$X = \mathbb{R}$，$A = [0,1]$、$B = [1,2]$，则 $\mathring{A} = (0,1)$、$\mathring{B} = (1,2)$，而 $\mathring{(A \cup B)} = (0,2)$ —— 多出了点 $1$。**闭包对并不出问题、对交会出问题**，内部正好反过来。

⚠️ **别把「内部」与「开核」当成两个东西**：开核（open kernel）就是内部的另一个名字，中文文献两种都常见。也不要把内部与「内点集」搞混 —— 后者是「存在开球含于 $A$ 的点」，在一般拓扑里要换成开邻域，结论仍是 $\mathring{A}$。

> 续见 notes/def.interior.2.md
