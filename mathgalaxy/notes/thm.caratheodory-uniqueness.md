# 扩张的唯一性　`thm.caratheodory-uniqueness`　·　说明
根 `../`

要点：**Carathéodory 扩张是「最大」的那一个**。

原因藏在 $\mu^{*}$ 的定义里 —— 它是用「覆盖取下确界」造的，而任何扩张 $\nu$ 都要满足次可加性，于是 $\nu (A) \le \sum \nu (E_{j}) = \sum \mu _{0}(E_{j})$，对所有覆盖取下确界就得到 $\nu \le \mu^{*}$。

⚠ 不 $\sigma$有限时唯一性会**失效**（$\mathbb{R}$ 上的 Lebesgue 长度是 $\sigma$ 有限的，换不掉）：取 $\mathfrak{A} =$ 有限不交并的半开区间、$\mu _{0}((a,b]) = +\infty$（$a < b$），它不 $\sigma$ 有限（每段都是 $\infty$）。两个扩张：$\mu _{1}(E) = +\infty$（$E \ne \emptyset$）、$\mu _{1}(\emptyset) = 0$；另一个 $\mu _{2}(E) = 0$（$E$ 是 Lebesgue 零集）、否则 $+\infty$。它们在 $\mathfrak{A}$ 上都取 $\infty$，却在单点集上分道扬镳。

$\sigma$有限性正是用来堵住这种漏洞的。

构造测度的标准收尾就是这一条：**先造预测度（好造），再扩张（Carathéodory 保证存在），最后用 $\sigma$有限保证唯一**。
