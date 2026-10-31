# 张量积的函子性质　`prop.tensor-functor-properties`　·　说明
根 `../`

⭐ 由 2、3 立刻得到：$(-) \otimes_{R} N$ **保余极限**（直和、余核、滤过余极限）。这一条同时解释了「右正合」（保余核）与「保直和」，是后面 `prop.tensor-right-exact` 与 `prop.free-flat` 的共同根。

⚠️ 一般**不保**极限：$\otimes$ 不保核。$0 \to \mathbb{Z} \xrightarrow{\;2\;} \mathbb{Z}$ 是正合列，取 $N = \mathbb{Q}$ 张量后仍正合（乘 $2$ 在 $\mathbb{Q}$ 上仍然单），但取 $N = \mathbb{Z}/2$ 张量后乘 $2$ 变成零映射，核冒出来了（见 `prop.tensor-right-exact`）。它也不保无限积。

📌 结合律 4 在交换环上的常见样子：$(M \otimes_{R} N) \otimes_{R} P \cong M \otimes_{R} N \otimes_{R} P$，于是可以不加括号地写多重张量积。
