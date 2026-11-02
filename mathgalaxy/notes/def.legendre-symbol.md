# Legendre 符号　`def.legendre-symbol`　·　说明
根 `../`

它把「有没有解」压成一个取值 $\pm 1$ 的函数，而乘法性立刻可见：由 $x^{2} \equiv a$、$y^{2} \equiv b$ 得 $(xy)^{2} \equiv ab$，配合「各恰有 $(p-1)/2$ 个剩余」的计数，得



$$\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right)\left(\frac{b}{p}\right) .$$



所以 $\left(\frac{\cdot}{p}\right) : \mathbb{F}_{p}^{\times} \to \{\pm 1\}$ 是群同态，核就是二次剩余构成的子群 —— Legendre 符号就是商群 $\mathbb{F}_{p}^{\times}/(\mathbb{F}_{p}^{\times})^{2} \cong \{\pm 1\}$ 的那张同构表。
