# 标准消解　`def.bar-resolution`　·　说明
根 `../`

**两条与写法有关的事**：
- **$R[G]$-自由性**：$[g_{0}|\cdots|g_{n}] = g_{0} \cdot [1|g_{1}|\cdots|g_{n}]$，所以 $B_{n}$ 作为 $R[G]$-模有基 $\{[1|g_{1}|\cdots|g_{n}]\}$ —— 它是**自由**的，这是整套消解能拿来算导出函子的关键（自由 $\implies$ 投射）。
- **归一化版本**：把「$i \ge 1$ 时 $g_{i} = 1$」的那些符号生成的子复形记 $B^{\mathrm{norm}}_{\bullet}$，则含入 $B^{\mathrm{norm}}_{\bullet} \hookrightarrow B_{\bullet}$ 是拟同构（逐项可缩），所以拿它算同调给出同一个答案，但项要少得多。

**正合性（收缩同伦）**：约定 $B_{-1} := R$、$d_{0} := \varepsilon$，令

$$s_{n}[g_{0}|\cdots|g_{n}] := [1|g_{0}|\cdots|g_{n}] \qquad (n \ge 0), \qquad s_{-1}(1) := [1] .$$

> 续见 notes/def.bar-resolution.2.md
