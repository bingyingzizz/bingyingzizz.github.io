# 扩张的唯一性　`thm.caratheodory-uniqueness`　·　说明
根 `../`

要点：**Carathéodory 扩张是「最大」的那一个**。原因藏在 $\mu^{*}$ 的定义里 —— 它是用「覆盖取下确界」造的，而任何扩张 $\nu$ 都要满足次可加性，于是 $\nu (A) \le \sum \nu (E_{j}) = \sum \mu _{0}(E_{j})$，对所有覆盖取下确界就得到 $\nu \le \mu^{*}$。

⚠ 不 $\sigma$有限时唯一性会**失效**：$\mathbb{R}$ 上取 $\mathfrak{A} =$ 有限并的半开区间，$\mu _{0} = Lebesgue$ 长度限制在 $\mathfrak{A}$ 上，则「Lebesgue 测度」与「Lebesgue 测度 + 集中在某个非 Lebesgue 可测集上的无穷值」都是扩张。$\sigma$有限性正是用来堵住这种漏洞的。

构造测度的标准收尾就是这一条：**先造预测度（好造），再扩张（Carathéodory 保证存在），最后用 $\sigma$有限保证唯一**。
