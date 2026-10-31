# 平坦但不投射　`ex.flat-not-projective`　·　说明
根 `../`

**平坦**：$\mathbb{Z}$ 是主理想整环、$\mathbb{Q}$ 无挠，由 `prop.flat-domain-torsionfree` 的反向得平坦；也可以直接用 Lambek：理想 $(n)$ 上 $n \cdot : \mathbb{Q} \to \mathbb{Q}$ 是单射（在 $\mathbb{Q}$ 里除法随便做）✓。

**不投射**：假设 $\mathbb{Q}$ 投射，取满射 $F = \bigoplus_{i \in I} \mathbb{Z} \twoheadrightarrow \mathbb{Q}$，投射性给出截面，于是 $\mathbb{Q}$ 是 $F$ 的直和项、特别地是 $F$ 的**子群**。但 $F$ 没有非平凡可除子群：$F$ 的元素只有有限多个非零坐标，$n$ 倍映射逐坐标作用，若 $x$ 能被任意 $n$ 整除则每个坐标都被任意 $n$ 整除，而 $\mathbb{Z}$ 中只有 $0$ 如此，故 $x = 0$。与 $\mathbb{Q} \ne 0$ 矛盾 ✓。

> 续见 notes/ex.flat-not-projective.2.md
