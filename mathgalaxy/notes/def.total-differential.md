# 可微与全微分　`def.total-differential`　·　说明
根 `../`

⭐ 全微分的实质是**一个线性映射**（`def.linear-map`），不是「一列偏导数」。偏导只是它在标准基下的矩阵（`def.jacobian`）—— 把 $Df(a)$ 想成矩阵会丢掉「换坐标后怎么办」这个最关键的信息。

**唯一性**：若 $L_1, L_2$ 都满足，则 $(L_1 - L_2)(h) = o(\|h\|)$。取 $h = tv$（$v \ne 0$）除以 $t$ 令 $t \to 0$，得 $(L_1 - L_2)(v) = 0$，故 $L_1 = L_2$。∎

**$C^{1} \implies$ 可微**：取 $L$ 为偏导矩阵。沿坐标方向逐段用一元中值定理（`thm.mvt`）：把 $h$ 拆成 $n$ 步、每步只动一个坐标，每次得到一个 $O(|h_j|)$ 的余项，累加得余项 $O(\|h\|) \to 0$。∎

⚠ **与 `def.rn-derivative` 必须分清**：那一条里的「$\mathbb{R}^{n}$ 导数」是 Radon–Nikodym 意义的**密度** $\frac{d\nu}{d\mu}$（测度比），与这里的全微分**同名不同物**，两者之间没有一般关系。

> 续见 notes/def.total-differential.2.md
