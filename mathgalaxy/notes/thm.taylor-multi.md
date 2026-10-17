# 多元 Taylor 公式　`thm.taylor-multi`　·　说明
根 `../`

⭐ 关键观察：**二阶导数 $D^{2}f(a)$ 是 $\mathbb{R}^{n}$ 上的对称双线性型**（`def.bilinear-form`），不是「一堆二阶偏导」。$k = 2$ 的公式里 $D^{2}f(a)(h,h)$ 就是 $\sum_{i,j} \partial_i \partial_j f(a)\, h_i h_j = h^{\mathsf{T}} H_f(a)\, h$。

⭐ 于是多元 Taylor 与线性代数直接对上：$h^{\mathsf{T}} H h$ 是一个**二次型**（`def.quadratic-form`），而二次型的正定性有现成判据（`thm.sylvester-criterion`）—— 极值判别（`thm.second-derivative-test`）就是这条公式加那个判据。

⚠ 证明的坑：对 $t \mapsto f(a + th)$ 用一元 Taylor 只给出**沿一条线**的展开，而且余项里的 $\theta$ 依赖 $h$。要对所有 $h$ 一致，得对 $k$ 归纳、把余项写成多重指标求和，每一层用一次一元 MVT（或对 $h$ 的坐标迭代）。
