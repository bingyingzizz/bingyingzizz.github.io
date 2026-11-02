# 紧 Haus 到实 Banach 全零　`prop.rhom-chaus-banach-zero`　·　说明
根 `../`

只剩下 $q = 0$ 那一行，即复形 $K^{\bullet}$，$K^{n} := \bigoplus_{i} C\bigl(M^{s_{n,i}}\times S,\ N\bigr)$（Banach 空间）。

只要证 $K^{\bullet}$ 零调。
- **关键工具**是「乘 $2$ 与 $[2]$ 同伦」：由 $2 - [2] = dh + hd$，对闭链 $f \in K^{n}$（$df = 0$）有 $2f - [2]f = dh^{n+1}f$，于是
$$f = \tfrac{1}{2}[2]f + d\Bigl(\tfrac{1}{2}h^{n+1}f\Bigr).$$
- 把这一式对 $f$ 反复代入 $n$ 次：
$$f = \frac{1}{2^{n}}[2^{n}]f + d\Bigl(\sum_{k=1}^{n} \frac{1}{2^{k}} h^{n+1}\bigl([2^{k-1}]f\bigr)\Bigr).$$
- 因为 $\|[2]\| \le 1$、$\|h^{n+1}\| \le \|h^{n+1}\| < \infty$ 且 $N$ 是 Banach（**完备**），级数 $\sum_{k} \frac{1}{2^{k}} h^{n+1}([2^{k-1}]f)$ **收敛**；

又 $\frac{1}{2^{n}}[2^{n}]f \to 0$。

令 $n\to\infty$：
$$f = d\Bigl(\sum_{k=1}^{\infty} \frac{1}{2^{k}} h^{n+1}\bigl([2^{k-1}]f\bigr)\Bigr),$$
即每个闭链都是边界，$K^{\bullet}$ 零调。∎
