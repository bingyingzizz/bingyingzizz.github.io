# Jordan 引理　`lem.jordan`　·　说明
根 `../`

$$\int_{-\infty}^{\infty} \frac{e^{i a x}}{x^2 + 1}\,\mathrm{d}x = 2\pi i \, \operatorname{Res}\left( \frac{e^{i a z}}{z^2 + 1},\, i \right) = 2\pi i \cdot \frac{e^{-a}}{2 i} = \pi e^{-a}.$$

取实部、虚部得到两个经典积分（$a > 0$）：

$$\int_{-\infty}^{\infty} \frac{\cos(a x)}{x^2 + 1}\,\mathrm{d}x = \pi e^{-a}, \qquad \int_{-\infty}^{\infty} \frac{\sin(a x)}{x^2 + 1}\,\mathrm{d}x = 0,$$

第二式为 $0$ 是因为被积函数是奇函数。这里 $M_R \le 2/R^2$，这个幂次其实够粗糙的 ML 估计用；但把分母换成一次式（比如 $z$），就只剩 Jordan 引理这一条路 —— 那正是本引理存在的理由。
