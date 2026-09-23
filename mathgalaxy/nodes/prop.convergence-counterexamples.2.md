# 四个标准反例　`prop.convergence-counterexamples`　·　续页（第 2 页）
根 `../`　·　第 1 页 `nodes/prop.convergence-counterexamples.md`

## 陈述（续）
- **(i)** $f_n = n^{-1} \chi_{(0, n)}$：$f_n \rightrightarrows  0$ **一致**收敛。
- **(ii)** $f_n = \chi_{(n, n+1)}$：$f_n \to 0$ **逐点**（因而 a.e.），但**不一致**（$\sup_x |f_n| = 1$），也不 $L^{1}$ 收敛（$\int f_n = 1 \nrightarrow  0$）。
- **(iii)** $f_n = n \chi_{[0, 1/n]}$：$f_n \to 0$ 
a.e.（也依测度收敛，因为 $\mu(\{|f_n| > \delta\}) = 1/n \to 0$），但**不 $L^{1}$ 收敛**（$\int f_n = 1$ 对一切 $n$）。
- **(iv) 二进制填充**：把右下角越来越小的区间排成一列 ——
$$f_1 = \chi_{[0,1]}, f_2 = \chi_{[0,1/2]}, f_3 = \chi_{[1/2,1]}, f_4 = \chi_{[0,1/4]}, \cdots$$
即 $f_n = \chi_{[j/2^k, (j+1)/2^k]}$（$n = 2^k + j$）：它**依测度**收敛到 0，但对**任何** $x \in [0,1]$ 都**不**收敛。
