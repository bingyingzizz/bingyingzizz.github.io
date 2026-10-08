# 单态射 / 满态射　`def.mono`
单态射与满态射（Monomorphism / Epimorphism）
layer 13 · 定义 · 单满、子对象与像 · 范畴论

态射 $i : Y \to X$ 叫**单态射**（mono），如果对任意对象 $Z$ 与任意 $f, g : Z \to Y$，

$$i \circ f = i \circ g \;\Longrightarrow\; f = g$$

（左可消）。等价地：方块 $Y \to Y \times_X Y$ 是笛卡尔的，即 $Y \cong Y \times_X Y$，其中 $Y \times_X Y$ 是沿 $i$ 的两个拉回。把箭头全部反向，得到**满态射**（epi，右可消）。

## 为什么成立（入边，证明在 proofs/）
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-mono.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.covering-sieve-epi` 覆盖筛即余积满射
- 被 `lem.presheaf-mono-pointwise` 预层态射的单满按点检验 用
- 被 `prop.injective-criterion` 内射对象的判据 用
- 被 `def.subobject` 子对象 用
- 被 `def.image` 像 / 余像 用
- 被 `def.projective-object` 投射 / 内射对象 用

> 说明见 `notes/def.mono.md`

- …另有出边，续页见 `nodes/def.mono.2.md`
