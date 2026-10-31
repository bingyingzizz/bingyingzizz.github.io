# 保角性　`prop.conformal-iff`　·　说明
根 `../`

⭐ (i) 一行就够：$f(z_0 + h) - f(z_0) \approx f'(z_0)\,h$。乘以非零复数 $f'(z_0) = |f'|e^{i\theta}$ 就是「旋转 $\theta$ + 伸缩 $|f'|$」—— 相似变换，夹角与长度比自然不变。

⭐ (ii) 的要点：保角等价于「增量映射 $\Delta z \mapsto \Delta f$ 是相似变换」，即它只含 $\Delta z$ 不含 $\overline{\Delta z}$。而这正是 $\partial f/\partial \bar z(z_0) = 0$ —— 与 CR 方程是同一句话。

⚠ 「导数非零」不能丢：$f(z) = z^2$ 在 $0$ 处把夹角**加倍**（$0$ 是临界点）；$f(z) = \bar z$ 虽然保角但是**反向**的（它把定向翻过来），所以不在 (ii) 的「保向」范围内，也不全纯。

📌 分式线性变换 $f(z) = (az+b)/(cz+d)$ 的导数是 $(ad-bc)/(cz+d)^2$，$ad - bc \ne 0$ 保证它处处不为零 —— 这就是 Möbius 变换处处共形的原因。
