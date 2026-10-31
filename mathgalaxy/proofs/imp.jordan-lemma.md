# 围道积分 $\implies$ Jordan 引理
`imp.jordan-lemma` · 推出 · strong 边 · 根 `../`

`def.contour-integral` 复围道积分 → `lem.jordan` Jordan 引理

**第一步：把弧上的模写清楚。** 在 $C_R$ 上取 $z = R e^{i\theta}$，$0 \le \theta \le \pi$。则

$$\left| e^{i a z} \right| = \left| e^{i a R(\cos\theta + i\sin\theta)} \right| = e^{-a R \sin\theta}.$$

**第二步：关键不等式。** 对 $0 \le \theta \le \pi/2$ 有 $\sin\theta \ge \dfrac{2\theta}{\pi}$（弦在弧下），右边同样成立（用 $\sin(\pi - \theta) = \sin\theta$）。于是整段上

$$e^{-a R \sin\theta} \le e^{-2 a R \theta/\pi}.$$

**第三步：估积分。** 记 $M_R := \max_{C_R}|f|$，则

> 续见 proofs/imp.jordan-lemma.2.md
