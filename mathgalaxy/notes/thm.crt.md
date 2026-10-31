# 中国剩余定理　`thm.crt`　·　说明
根 `../`

存在性（构造式）：由 Bézout，取 $e_{i}$ 满足 $e_{i} \equiv 1 \pmod{n_{i}}$、$e_{i} \equiv 0 \pmod{n_{j}}$（$j \ne i$），即 $e_{i} = (N/n_{i})\,u_{i}$，其中 $u_{i}(N/n_{i}) \equiv 1 \pmod{n_{i}}$；于是 $x = \sum_{i} a_{i} e_{i}$ 就是解。



唯一性：两个解之差被每个 $n_{i}$ 整除，而 $n_{i}$ 两两互素，故被 $N$ 整除。



互素条件不能去掉：$x \equiv 0 \pmod 2$ 与 $x \equiv 1 \pmod 4$ 无解。



实际用处是把模 $N$ 的问题拆成模素数幂的问题 —— 乘性函数的公式就是靠它。
