# 二次互反律　`thm.quadratic-reciprocity`　·　说明
根 `../`

**证明（Gauss 引理 + 矩形计数，初等）。** 记 $P = \frac{p-1}{2}$、$Q = \frac{q-1}{2}$。对 $1 \le x \le P$ 记 $m_{x} := \left\lfloor \frac{qx}{p} \right\rfloor$，$r_{x}$ 为 $qx$ 模 $p$ 的最小正剩余（$1 \le r_{x} \le p-1$，因为 $p \nmid qx$）。

**第一步：Gauss 引理。** 令 $\varepsilon_{x} = 1$（当 $r_{x} < p/2$）或 $-1$（当 $r_{x} > p/2$），并令 $s_{x} = r_{x}$（前一种）或 $s_{x} = p - r_{x}$（后一种），则 $1 \le s_{x} \le P$。断言 $x \mapsto s_{x}$ 是 $\{1, \ldots, P\}$ 的置换：若 $s_{x} = s_{y}$，则 $r_{x} \equiv \pm r_{y} \pmod p$，即 $qx \equiv \pm qy \pmod p$；$q$ 在模 $p$ 下可逆，故 $x \equiv \pm y \pmod p$；而 $1 \le x, y \le P$ 且 $p$ 是奇数，$x \equiv -y$ 会给出 $x + y = p$，与 $x + y \le 2P = p - 1$ 矛盾，故 $x = y$ ✓。

于是把 $\{qx\}_{x \le P}$ 换成最小正剩余再取符号，得到

> 续见 notes/thm.quadratic-reciprocity.3.md
