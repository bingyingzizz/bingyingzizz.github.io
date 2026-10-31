# Picard 小定理　`thm.picard-little`　·　说明
根 `../`

⭐ **它比 Liouville 强多少**：Liouville（`thm.liouville`）说「有界整函数是常数」，只挡住「像集有界」；Picard 说「像集漏两个点都不行」—— 哪怕像集是无界的。

**本图给的证明只覆盖有限阶情形**（这是诚实标注）：若 $f$ 是有限阶且漏掉两个值 $a, b$，则 $g := (f - a)/(f - b)$ 是**不取 $0$ 与 $1$** 的整函数。由 Hadamard 分解（`thm.hadamard-factorization`）$g = e^{P}$；若不取 $1$，则 $e^{P} - 1$ 无零点 $\implies$ 它也有分解 $\implies$ 逐次比较增长阶可以逼出 $P$ 为常数，与 $f$ 非常数矛盾。

⚠️ **一般情形的证明需要 Bloch 定理或模函数 $\lambda$**（把上半平面映到 $\mathbb{C}\setminus\{0,1\}$ 的万有覆叠），本图没有这两样东西，所以记作**外部输入**。这一条已如实写在节点里，不假装证完了。

📌 与 `thm.casorati-weierstrass` 的关系：Casorati 说本性奇点附近**稠密**；Picard 把它加强成「至多漏一点」。小定理是它在「整函数 + 奇点在无穷远」情形的版本。
