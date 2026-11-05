# 可测函数　`def.measurable-function`　·　说明
根 `../`

- 原像把**开集**拉回可测 $\iff$ 原像把 **Borel 集**拉回可测：$(\Leftarrow)$ 显然；$(\implies)$ 要用「原像保持 $\sigma$-代数运算」这一条（因为 Borel 集由开集生成）。
- $\iff$ **所有水平集 $\{x : f(x) > a\}$ 可测**（$a \in \mathbb{R}$）：**这是最常用的判据**，只需检验一族生成元，不必检验所有开集。⚠️ 用 $\{f > a\}$ 还是 $\{f \ge a\}$ 都行，**混用也无妨**（$\{f > a\} = \bigcup_{q \in \mathbb{Q}, q > a} H_q$，每个 $H_q$ 取两种形式之一都能还原）。
- $\iff$ **$f^{+}, f^{-}$ 都可测**：把实值拆成正负部，非负情形再用 $\{f > a\}$。

> 续见 notes/def.measurable-function.3.md
