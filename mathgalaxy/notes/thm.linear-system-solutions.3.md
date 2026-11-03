# 线性方程组的解结构　`thm.linear-system-solutions`　·　说明
根 `../`

⚠️ **三个不能省的条件**：
- 「$K$ 是**域**」：$\mathbb{Z}$ 上的方程 $2x = 1$ 无解、$2x = 2$ 有解，秩判据要改成 Smith 标准形（或者用「解的存在性 $\iff$ gcd 条件」）。
- 「**有限维**」：无穷维时 $\dim \ker A = n - \operatorname{rank} A$ 里的 $n$ 不存在，要用「余维数」的说法。
- 「$\det A \ne 0$」只在 $m = n$ 时有意义；$m \ne n$ 时不要说「$\det$」，那是伪逆/最小二乘的场合（`def.pseudoinverse`）。
