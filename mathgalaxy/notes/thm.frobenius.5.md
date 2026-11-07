# Frobenius 定理　`thm.frobenius`　·　说明
根 `../`

**五、$k=n-1$ 与 $\omega\wedge\mathrm{d}\omega=0$ 的计算。** 设 $\mathcal{D}=\ker\omega$，$\omega$ 处处非零。对 $X,Y\in\ker\omega$，

$$\mathrm{d}\omega(X,Y)=X\omega(Y)-Y\omega(X)-\omega([X,Y])=-\omega([X,Y]).$$

故对合（$[X,Y]\in\ker\omega$）当且仅当 $\mathrm{d}\omega$ 在 $\ker\omega\times\ker\omega$ 上恒为零。而 $\mathrm{d}\omega$ 在 $\ker\omega$ 上为零当且仅当 $\mathrm{d}\omega=\omega\wedge\alpha$（某个 $1$-形式 $\alpha$），这又当且仅当 $\omega\wedge\mathrm{d}\omega=0$（两边用同一个 $\alpha$ 展开即知）。$\square$

**六、条件是最优的。** 反例是接触分布（见 `def.involutive-distribution` 的注）：它光滑、秩 $2$、处处非零，却不对合，于是任何曲面都装不下它。所以「对合」不是技术假设，而是充要条件的一半。

> 续见 notes/thm.frobenius.6.md
