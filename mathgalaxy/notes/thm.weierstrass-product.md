# Weierstrass 乘积定理　`thm.weierstrass-product`　·　说明
根 `../`

**证明**：先把序列里等于 $0$ 的项拿掉（它们只贡献 $z^{m}$ 这个因子），余下的仍记为 $a_{n}\ne 0$；初等因子取 $E_{p}(z) = (1-z)\exp\Bigl(z + \frac{z^{2}}{2} + \cdots + \frac{z^{p}}{p}\Bigr),\qquad E_{0}(z) = 1-z .$

**引理 1（初等因子的估计）**：$|z|\le \frac{1}{2}$ 时 $|1 - E_{p}(z)| \le 4|z|^{p+1}$。证明：$|z|<1$ 时 $\log E_{p}(z) = -\sum_{k>p} z^{k}/k$，故 $|\log E_{p}(z)| \le \sum_{k>p}\frac{|z|^{k}}{k} \le \frac{|z|^{p+1}}{(p+1)(1-|z|)} \le 2|z|^{p+1};$ 又 $|1-e^{w}|\le 2|w|$（$|w|\le 1$），取 $w = \log E_{p}(z)$ 即得（$p=0$ 时直接有 $1-E_{0}(z) = z$）。

> 续见 notes/thm.weierstrass-product.2.md
