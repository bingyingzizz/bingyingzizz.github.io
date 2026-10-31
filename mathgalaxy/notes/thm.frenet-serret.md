# Frenet–Serret 公式　`thm.frenet-serret`　·　说明
根 `../`

⭐ **为什么只有两个函数**：$3\times3$ 反称矩阵有 $3$ 个自由度，但 $T'$ 的方向被 $N$ 的定义锁死（$\langle T',T\rangle = \langle T',B\rangle = 0$ 是恒等式），于是只剩 $\kappa$ 与 $\tau$。

**与结构方程是同一件事**：把 $\mathrm{d}T,\mathrm{d}N,\mathrm{d}B$ 按标架展开，系数就是 $\kappa\,\mathrm{d}s$、$\tau\,\mathrm{d}s$。曲面的 $\omega^{i}_{\ j}$（`def.connection-form`）在曲线情形退化成这三个数乘以 $\mathrm{d}s$。

**反称性的来源**：$\langle T,T\rangle = \langle N,N\rangle = \langle B,B\rangle = 1$、$\langle T,N\rangle = \langle T,B\rangle = \langle N,B\rangle = 0$ 都是常数，求导即得矩阵反称 —— 与 `prop.connection-antisymmetric` 的证明逐字相同。

⚠️ 只在 $\kappa>0$ 处成立。$\kappa = 0$ 的孤立点上 $N$ 不存在，公式没有意义（但 $\kappa$ 本身仍然有定义）。

**它的用处**：把曲线的几何问题化成一个线性方程组问题 —— 于是「存在性 + 唯一性」可以整块交给 ODE（`thm.curve-fundamental-theorem`）。
