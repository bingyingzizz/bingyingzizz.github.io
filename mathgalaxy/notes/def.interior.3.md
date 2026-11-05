# 内部　`def.interior`　·　说明
根 `../`

- $\mathring{A}$ = 含于 $A$ 的开集之并 = **含于 $A$ 的最大开集**：定义展开。
- $A$ 开 $\iff$ $\mathring{A} = A$：一行（开集含于自身）。**不需要额外假设。**
- **对偶公式** $\mathring{A} = X \setminus \overline{X \setminus A}$：**这一步要用两次取补**，是内部与闭包之间唯一的桥；所有关于闭包的定理都能经它翻译成内部的定理。
- $\mathring{(A \cap B)} = \mathring{A} \cap \mathring{B}$：**对交保号**（**有限**交也对，取并的 De Morgan 即得）。⚠️ **任意交不保号**：只有 $\mathring{(\bigcap_i A_i)} \subseteq \bigcap_i \mathring{A_i}$，可以严格小 —— $A_n = (-1/n, 1/n) \subseteq \mathbb{R}$ 时左边是 $\{0\}$ 的内部 $= \emptyset$，右边是 $\{0\}$。
- $\mathring{(A \cup B)} \supseteq \mathring{A} \cup \mathring{B}$：**对并只给包含**，可能严格变大（$A = [0,1]$、$B = [1,2]$ 在 $\mathbb{R}$ 里，内部从 $(0,1)\cup(1,2)$ 变成 $(0,2)$）。

> 续见 notes/def.interior.4.md
