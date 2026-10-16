# 单态射 / 满态射 / 同构　`def.mono`
单态射、满态射与同构（Mono / Epi / Isomorphism）
layer 13 · 定义 · 单满、子对象与像 · 范畴论
[在星图里打开](../#n=def.mono)　·　[节点索引](../index.md)

态射 $i : Y \to X$ 叫**单态射**（mono），如果对任意对象 $Z$ 与任意 $f, g : Z \to Y$，

$$i \circ f = i \circ g \;\Longrightarrow\; f = g$$

（左可消）。等价地：方块 $Y \to Y \times_X Y$ 是笛卡尔的，即 $Y \cong Y \times_X Y$，其中 $Y \times_X Y$ 是沿 $i$ 的两个拉回。把箭头全部反向，得到**满态射**（epi，右可消）。

两个方向都可消的态射叫**同构**：$f : X \to Y$ 叫**同构**（isomorphism），如果存在 $g : Y \to X$ 使

$$g \circ f = 1_{X}, \qquad f \circ g = 1_{Y}$$
> 陈述续见 [nodes/def.mono.2.md](./def.mono.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.mono.3.md](./def.mono.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.mono.4.md](./def.mono.4.md)

refs: Le Stum, An introduction to condensed mathematics, §1.1

> 说明见 `notes/def.mono.md`

引用：`def.mono`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
