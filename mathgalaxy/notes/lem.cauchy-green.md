# Cauchy–Green 恒等式　`lem.cauchy-green`　·　说明
根 `../`

⭐ 这就是 Green 公式的直接翻译。Green 公式：$\oint_{\partial\Omega}(P\,\mathrm{d}x + Q\,\mathrm{d}y) = \iint_\Omega (Q_x - P_y)\,\mathrm{d}x\mathrm{d}y$。把积分拆成 $\oint (u\,\mathrm{d}x - v\,\mathrm{d}y) + i\oint (v\,\mathrm{d}x + u\,\mathrm{d}y)$，两次对上号得 $\iint [-(u_y + v_x)] + i\iint(u_x - v_y)$ —— 而 $2i f_{\bar z}$ 逐项算出来正是 $-(u_y + v_x) + i(u_x - v_y)$。

⭐ 它在分量上就是 CR 方程的**积分版**：全纯 $\iff f_{\bar z} = 0 \implies$ 右端为零。

⚠ 这条引理**不是免费的**：Green 公式要求 $P, Q$（从而 $f$）在闭包 $\overline{\Omega}$ 上 $C^1$。全纯只保证 $f$ 可微，**不保证 $f'$ 连续** —— 这个缺口由 Goursat 的三角形分割补上。
