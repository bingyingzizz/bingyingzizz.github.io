# 模的张量积　`def.tensor-module`　·　说明
根 `../`

**读法**：三个关系各管一件事 —— 前两条说 $\otimes$ 对两个变元分别可加，第三条 $m r \otimes n = m \otimes r n$ 说「$R$ 的作用可以从一边搬到另一边」。交换环上第三条写成 $r m \otimes n = m \otimes r n$，最眼熟。

**元素不是纯张量**：一般元素是有限和，所以「$\sum m_{i} \otimes n_{i}$ 是否为零」不能逐项看。纯张量仍可能等于零：$\mathbb{Z}/2 \otimes_{\mathbb{Z}} \mathbb{Z}/3 = 0$，因为

$$1 \otimes 1 = (3 \cdot 1) \otimes 1 = 1 \otimes (3 \cdot 1) = 1 \otimes 0 = 0 .$$

⭐ **构造与基无关**：万有性质说任何「把双线性换成线性」的对象都同构于它，所以换一种造法（例如先做自由模再取商）得到同一个东西。

📌 与 `prop.module-tensor-universal` 的关系：那是 $\mathbb{Z}$ 与域系数下的特例；一般 $R$ 上多出来的只有平衡那条关系。
