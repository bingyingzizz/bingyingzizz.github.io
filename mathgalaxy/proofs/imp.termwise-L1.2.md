# 非负逐项积分 + 零集判定 $\implies L^{1}$ 的逐项积分
`imp.termwise-L1` · 推出 · strong 边 · 根 `../`

`thm.termwise-integration` 逐项积分 + `prop.integral-zero-iff` 积分为零 ⟺ 几乎处处为零 → `thm.termwise-L1` L¹ 的逐项积分

$$\int f = \lim_{N\to\infty} \int s_N = \lim_{N\to\infty} \sum_{j\le N} \int f_j = \sum_{j=1}^{\infty} \int f_j$$

（中间一步用 $L^{1}$ 的线性。）∎
