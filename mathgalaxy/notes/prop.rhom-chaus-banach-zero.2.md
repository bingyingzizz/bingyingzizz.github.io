# 紧 Haus 到实 Banach 全零　`prop.rhom-chaus-banach-zero`　·　说明
根 `../`

**证明（把闭链写成收敛级数）。** 仍用 Breen–Deligne 谱序列 $E^{p,q}_{1} = \bigoplus_{i} H^{q}(M^{s_{p,i}}\times S, N) \implies \operatorname{Ext}^{p+q}_{\mathbb{Z}}(M,N)(S)$。
- 由 **Thm（实 Banach 在紧 Hausdorff 上零调）**，$M^{s_{p,i}}\times S$ 是紧 Hausdorff（$M$ 紧、$S$ Stonean 紧），故 $q > 0$ 的整行是 $0$；只剩下 $q = 0$ 那一行，即复形 $K^{\bullet}$，$K^{n} := \bigoplus_{i} C\bigl(M^{s_{n,i}}\times S,\ N\bigr)$（Banach 空间）。只要证 $K^{\bullet}$ 零调。
- **关键工具**是「乘 $2$ 与 $[2]$ 同伦」：由 $2 - [2] = dh + hd$，对闭链 $f \in K^{n}$（$df = 0$）有 $2f - [2]f = dh^{n+1}f$，于是
$$f = \tfrac{1}{2}[2]f + d\Bigl(\tfrac{1}{2}h^{n+1}f\Bigr).$$
- 把这一式对 $f$ 反复代入 $n$ 次：
$$f = \frac{1}{2^{n}}[2^{n}]f + d\Bigl(\sum_{k=1}^{n} \frac{1}{2^{k}} h^{n+1}\bigl([2^{k-1}]f\bigr)\Bigr).$$
- 因为 $\|[2]\| \le 1$、$\|h^{n+1}\| \le \|h^{n+1}\| < \infty$ 且 $N$ 是 Banach（**完备**），

> 续见 notes/prop.rhom-chaus-banach-zero.3.md
