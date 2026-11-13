# 合同矩阵　`def.congruent-matrices`　·　续页（第 2 页）
[在星图里打开](../#n=def.congruent-matrices)　·　第 1 页 [nodes/def.congruent-matrices.md](./def.congruent-matrices.md)

## 陈述（续）
**公式只有这一条**，复情形也用**转置**而非共轭转置：$A = [1]$、$P = [i]$ 时 $P^{T}AP = [-1]$，而 $P^{*}AP = [1]$。带星号的 $P^{*}AP$ 是 **Hermite 型**的星合同，是另一个等价关系，不是这里的合同。

**合同保持的量**：秩、对称性、交错性；在**实对称**矩阵上还保持**惯性指数** $(p,q)$，因而保持正定性、半正定性。
**不保持**：特征值、迹、行列式的具体值。

⚠️ **「正定」只在实对称（或 Hermite 星合同）里谈**：$P^{T}AP$ 会改变符号（$[1] \mapsto [-1]$），所以「正定/半正定」**不是** $P^{T}AP$ 的不变量 —— 把它当复情形的不变量，就会得出 $[1]$ 与 $[-1]$ 合同却一正一负的矛盾。

> 续见 [nodes/def.congruent-matrices.3.md](./def.congruent-matrices.3.md)
