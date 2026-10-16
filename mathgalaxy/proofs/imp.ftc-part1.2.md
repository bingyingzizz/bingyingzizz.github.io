# 区间可加 + 基本估计 $\implies$ 变上限积分的导数
`imp.ftc-part1` · 推出 · strong 边 · 根 `../`

`prop.integral-linear` 积分的线性与区间可加 + `prop.integral-order` 积分的保序与估计 + `def.continuous` 连续 → `thm.ftc-riemann-part1` 变上限积分的导数

（第二个等号用了区间可加性把 $\int_{x_0}^{x_0+h} f(x_0) = h f(x_0)$ 提出来。）右端的绝对值 $\le \frac{1}{h} \cdot \varepsilon \cdot h = \varepsilon$，由基本估计。$h < 0$ 时同法（注意商里 $h$ 为负、积分上下限颠倒，两次符号相消）。故 $F'(x_0) = f(x_0)$。∎

> (b) 的证明只用到了 $f$ 在**同一点**的连续性 —— 积分本身在别处的取值完全不参与。
